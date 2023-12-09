import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://mifxsaojqrawlhoyxigq.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1pZnhzYW9qcXJhd2xob3l4aWdxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDIxMDkwNzYsImV4cCI6MjAxNzY4NTA3Nn0.f0_DpWGZAxscH006ZUlaykIfb5l2nta0CJnTbcfdfsY';
const supabase = createClient(supabaseUrl, supabaseKey);

const DataInsertionButton = () => {
  const insertDataToSupabase = async () => {
    try {
      const { data, error } = await supabase.from('movies').insert([
        {
          title: 'Inception',
          director: 'Christopher Nolan',
          year: 2010,
          genre: 'Science Fiction',
        },
        {
          title: 'The Matrix',
          director: 'Lana Wachowski, Lilly Wachowski',
          year: 1999,
          genre: 'Science Fiction',
        },
        {
          title: 'Hi NANNA',
          director: 'Nikhitha',
          year: 2023,
          genre: 'Family Drama',
        },
      ]);

      if (error) {
        throw error;
      }

      console.log('Data inserted:', data);
    } catch (error) {
      console.error('Error inserting data:', error.message);
    }
  };

  return (
    <div>
      <button onClick={insertDataToSupabase}>Insert Data to Supabase</button>
    </div>
  );
};

export default DataInsertionButton;
