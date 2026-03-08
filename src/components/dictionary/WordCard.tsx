import { DictionaryEntry, GrammarCategory } from '@/types/dictionary';
import { Volume2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface WordCardProps {
  entry: DictionaryEntry;
  onClick: () => void;
}

const categoryColors: Record<GrammarCategory, string> = {
  sostantivo: 'bg-primary/10 text-primary border-primary/20',
  verbo: 'bg-accent/10 text-accent border-accent/20',
  aggettivo: 'bg-secondary/80 text-secondary-foreground border-secondary',
  avverbio: 'bg-muted text-muted-foreground border-border',
  pronome: 'bg-primary/10 text-primary border-primary/20',
  preposizione: 'bg-muted text-muted-foreground border-border',
  congiunzione: 'bg-muted text-muted-foreground border-border',
  esclamazione: 'bg-accent/10 text-accent border-accent/20',
  locuzione: 'bg-secondary/80 text-secondary-foreground border-secondary',
};

const categoryLabels: Record<GrammarCategory, string> = {
  sostantivo: 'sost.',
  verbo: 'v.',
  aggettivo: 'agg.',
  avverbio: 'avv.',
  pronome: 'pron.',
  preposizione: 'prep.',
  congiunzione: 'cong.',
  esclamazione: 'escl.',
  locuzione: 'loc.',
};

export function WordCard({ entry, onClick }: WordCardProps) {
  return (
    <button
      onClick={onClick}
      className="card-elevated w-full text-left p-5 rounded-xl border border-border hover:border-primary/30 transition-all duration-200 group"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-primary transition-colors truncate">
              {entry.dialectWord}
            </h3>
            {entry.audioUrl && (
              <Volume2 className="h-4 w-4 text-muted-foreground flex-shrink-0" />
            )}
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <span className="text-sm">{entry.italianWord}</span>
            <Badge 
              variant="outline" 
              className={`text-xs ${categoryColors[entry.category]}`}
            >
              {categoryLabels[entry.category]}
            </Badge>
            {entry.gender && (
              <span className="text-xs">
                {entry.gender === 'maschile' ? 'm.' : entry.gender === 'femminile' ? 'f.' : ''}
              </span>
            )}
          </div>
        </div>
        <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
      </div>

      {entry.definition && (
        <p className="text-sm text-muted-foreground mt-3 line-clamp-2">
          {entry.definition}
        </p>
      )}

      {entry.examples && entry.examples.length > 0 && (
        <p className="text-sm italic text-muted-foreground/80 mt-2 line-clamp-1">
          "{entry.examples[0]}"
        </p>
      )}
    </button>
  );
}
