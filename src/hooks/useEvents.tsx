import { useState, useEffect } from 'react';

export interface EventItem {
  id: string;
  title: string;
  date: string;
  desc: string;
  tag: string;
  image: string;
}

const defaultEvents: EventItem[] = [
  {
    id: "evt_1",
    title: "lagos water festival",
    date: "july 2026",
    desc: "join us at nigeria's largest hydration and wellness festival tastings, panels and more.",
    tag: "upcoming",
    image: "https://images.unsplash.com/photo-1543822709-0d50711db185?w=800&q=80"
  },
  {
    id: "evt_2",
    title: "corporate wellness day",
    date: "august 2026",
    desc: "partner with me to bring pure hydration to your team's wellness initiatives.",
    tag: "open for booking",
    image: "https://images.unsplash.com/photo-1546069901-ba949f87265c?w=800&q=80"
  },
  {
    id: "evt_3",
    title: "hydrowells run club",
    date: "every saturday",
    desc: "weekly community runs across lagos free bottles of me for every finisher.",
    tag: "recurring",
    image: "https://images.unsplash.com/photo-1552674605-171d31d4513d?w=800&q=80"
  },
  {
    id: "evt_4",
    title: "premium tasting experience",
    date: "september 2026",
    desc: "an exclusive invite-only tasting where you experience the purity of every drop.",
    tag: "exclusive",
    image: "https://images.unsplash.com/photo-1560067174-c5a3a8f37060?w=800&q=80"
  },
];

export function useEvents() {
  const [events, setEvents] = useState<EventItem[]>(() => {
    const saved = localStorage.getItem('hydrowells_events');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error("Failed to parse events from local storage", e);
      }
    }
    return defaultEvents;
  });

  useEffect(() => {
    localStorage.setItem('hydrowells_events', JSON.stringify(events));
  }, [events]);

  const addEvent = (event: EventItem) => {
    setEvents(prev => [...prev, event]);
  };

  const updateEvent = (id: string, updated: Partial<EventItem>) => {
    setEvents(prev => prev.map(e => e.id === id ? { ...e, ...updated } : e));
  };

  const deleteEvent = (id: string) => {
    setEvents(prev => prev.filter(e => e.id !== id));
  };

  return { events, addEvent, updateEvent, deleteEvent };
}
