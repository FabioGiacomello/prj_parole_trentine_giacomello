import { useState, useEffect, useMemo } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { DictionaryEntry, SearchFilters, GrammarCategory } from '@/types/dictionary';

export function useDictionary() {
  const [entries, setEntries] = useState<DictionaryEntry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEntries = async () => {
      const { data, error } = await supabase
        .from('dictionary_entries')
        .select('*')
        .order('dialect_word', { ascending: true });
      
      if (error) {
        console.error('Errore nel caricamento del dizionario:', error);
      } else if (data) {
        setEntries(data.map(e => ({
          id: e.id,
          dialectWord: e.dialect_word,
          italianWord: e.italian_word,
          category: e.category as GrammarCategory,
          definition: e.definition || undefined,
          examples: e.examples || undefined,
          audioUrl: e.audio_url || undefined,
          imageUrl: e.image_url || undefined,
          relatedWords: e.related_words || undefined,
          createdAt: new Date(e.created_at),
          updatedAt: new Date(e.updated_at)
        })));
      }
      setLoading(false);
    };
    
    fetchEntries();
  }, []);

  const search = (query: string, filters: SearchFilters): DictionaryEntry[] => {
    if (!query.trim()) return [];
    const normalizedQuery = query.toLowerCase().trim();

    return entries.filter(entry => {
      if (filters.category && entry.category !== filters.category) return false;

      const matchesDialect = entry.dialectWord.toLowerCase().includes(normalizedQuery);
      const matchesItalian = entry.italianWord.toLowerCase().includes(normalizedQuery);
      const matchesExamples = entry.examples?.some(ex => ex.toLowerCase().includes(normalizedQuery));
      const matchesDefinition = entry.definition?.toLowerCase().includes(normalizedQuery);

      switch (filters.searchDirection) {
        case 'dialect-to-italian':
          return matchesDialect || matchesExamples;
        case 'italian-to-dialect':
          return matchesItalian || matchesDefinition;
        default:
          return matchesDialect || matchesItalian || matchesExamples || matchesDefinition;
      }
    });
  };

  const getSimilarWords = (entry: DictionaryEntry): DictionaryEntry[] => {
    return entries.filter(e => 
      e.id !== entry.id && (
        entry.relatedWords?.includes(e.dialectWord) ||
        e.category === entry.category
      )
    ).slice(0, 5);
  };

  const getEntryById = (id: string): DictionaryEntry | undefined => entries.find(e => e.id === id);

  const categories: GrammarCategory[] = useMemo(() => [...new Set(entries.map(e => e.category))], [entries]);

  return { entries, search, getSimilarWords, getEntryById, categories, totalCount: entries.length, loading };
}
