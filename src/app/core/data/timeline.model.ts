export interface TimelineEntry {
  /** Sortable chronological key, e.g. '2023-09', used to interleave education and experience by date. */
  sortKey: string;
  period: string;
  title: string;
  subtitle?: string;
  duration?: string;
  area?: string;
  description: string;
}
