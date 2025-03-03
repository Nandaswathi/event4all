/*
  # Create events table

  1. New Tables
    - `events`
      - `id` (bigint, primary key)
      - `title` (text, not null)
      - `date` (date, not null)
      - `time` (time)
      - `location` (text, not null)
      - `description` (text)
      - `category` (text)
      - `guest_count` (integer)
      - `image_url` (text)
      - `budget` (text)
      - `user_id` (uuid, references auth.users)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
  2. Security
    - Enable RLS on `events` table
    - Add policies for authenticated users to manage their own events
    - Add policy for public read access to events
*/

-- Create events table
CREATE TABLE IF NOT EXISTS events (
  id BIGSERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  date DATE NOT NULL,
  time TIME,
  location TEXT NOT NULL,
  description TEXT,
  category TEXT,
  guest_count INTEGER,
  image_url TEXT,
  budget TEXT,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE events ENABLE ROW LEVEL SECURITY;

-- Create policies
-- Users can view all events (public read access)
CREATE POLICY "Events are viewable by everyone"
  ON events
  FOR SELECT
  USING (true);

-- Users can insert their own events
CREATE POLICY "Users can create their own events"
  ON events
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- Users can update their own events
CREATE POLICY "Users can update their own events"
  ON events
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id);

-- Users can delete their own events
CREATE POLICY "Users can delete their own events"
  ON events
  FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);

-- Create a trigger to update the updated_at column
CREATE OR REPLACE FUNCTION update_events_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_events_updated_at
BEFORE UPDATE ON events
FOR EACH ROW
EXECUTE FUNCTION update_events_updated_at();