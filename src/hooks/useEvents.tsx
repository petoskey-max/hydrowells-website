import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';

export interface EventItem {
  id: string;
  title: string;
  date: string;
  desc: string;
  tag: string;
  image: string;
  created_at?: string;
}

export function useEvents() {
  const [events, setEvents] = useState<EventItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchEvents = async () => {
    try {
      setIsLoading(true);
      const { data, error } = await supabase
        .from('events')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setEvents(data || []);
    } catch (err: any) {
      console.error('Error fetching events:', err.message);
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const addEvent = async (event: Omit<EventItem, 'id' | 'created_at'>) => {
    try {
      const { data, error } = await supabase
        .from('events')
        .insert([event])
        .select();

      if (error) throw error;
      if (data) setEvents(prev => [data[0], ...prev]);
      return { data, error: null };
    } catch (err: any) {
      return { data: null, error: err.message };
    }
  };

  const updateEvent = async (id: string, updated: Partial<EventItem>) => {
    try {
      const { data, error } = await supabase
        .from('events')
        .update(updated)
        .eq('id', id)
        .select();

      if (error) throw error;
      if (data) {
        setEvents(prev => prev.map(e => e.id === id ? { ...e, ...data[0] } : e));
      }
      return { data, error: null };
    } catch (err: any) {
      return { data: null, error: err.message };
    }
  };

  const deleteEvent = async (id: string) => {
    try {
      const { error } = await supabase
        .from('events')
        .delete()
        .eq('id', id);

      if (error) throw error;
      setEvents(prev => prev.filter(e => e.id !== id));
      return { error: null };
    } catch (err: any) {
      return { error: err.message };
    }
  };

  return { events, isLoading, error, fetchEvents, addEvent, updateEvent, deleteEvent };
}
