/*
  # Add email field to admin_users table

  1. Changes
    - Add email column if it doesn't exist
    - Add unique constraint for email
  
  2. Security
    - Maintains existing RLS policies
*/

DO $$ 
BEGIN
  -- Add email column if it doesn't exist
  IF NOT EXISTS (
    SELECT 1 
    FROM information_schema.columns 
    WHERE table_name = 'admin_users' 
    AND column_name = 'email'
  ) THEN
    ALTER TABLE admin_users 
    ADD COLUMN email text NOT NULL DEFAULT '';
  END IF;
END $$;

-- Add unique constraint for email if it doesn't exist
DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1
    FROM pg_constraint
    WHERE conname = 'admin_users_email_key'
  ) THEN
    ALTER TABLE admin_users
    ADD CONSTRAINT admin_users_email_key UNIQUE (email);
  END IF;
END $$;