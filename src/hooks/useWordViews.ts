import { useState, useEffect } from 'react';

const WORD_VIEWS_KEY = 'dizionario-trentino-word-views';

interface WordViewStat {
  dialectWord: string;
  italianWord: string;
  viewCount: number;
}

export function useWordViews() {
  const [wordViews, setWordViews] = useState<Record<string, WordViewStat>>({});

  useEffect(() => {
    const stored = localStorage.getItem(WORD_VIEWS_KEY);
    if (stored) {
      try {
        setWordViews(JSON.parse(stored));
      } catch {
        setWordViews({});
      }
    }
  }, []);

  const incrementWordView = (dialectWord: string, italianWord: string) => {
    setWordViews(prev => {
      const key = dialectWord.toLowerCase();
      const updated = {
        ...prev,
        [key]: {
          dialectWord,
          italianWord,
          viewCount: (prev[key]?.viewCount ?? 0) + 1
        }
      };
      localStorage.setItem(WORD_VIEWS_KEY, JSON.stringify(updated));
      return updated;
    });
  };

  const getMostViewedWords = (limit = 5): WordViewStat[] => {
    return Object.values(wordViews)
      .sort((a, b) => b.viewCount - a.viewCount)
      .slice(0, limit);
  };

  return {
    wordViews,
    incrementWordView,
    getMostViewedWords
  };
}
