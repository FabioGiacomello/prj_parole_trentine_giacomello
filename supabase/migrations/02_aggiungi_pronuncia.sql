-- Aggiunge il campo pronuncia alla tabella delle voci del dizionario
ALTER TABLE public.dictionary_entries
ADD COLUMN IF NOT EXISTS pronunciation TEXT;

-- Aggiunge il campo pronuncia anche alla tabella dei suggerimenti
ALTER TABLE public.suggestions
ADD COLUMN IF NOT EXISTS pronunciation TEXT;
