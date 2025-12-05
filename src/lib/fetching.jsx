export async function getDataAlleProdukter() {

    const data = await fetch(
    `https://nwldyulnmyqrldjvcumo.supabase.co/rest/v1/produkter?select=*`,
    {
      headers: {
        apikey: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im53bGR5dWxubXlxcmxkanZjdW1vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ2NjY4OTEsImV4cCI6MjA4MDI0Mjg5MX0.EkoQ3jBYi_1FgUrE956NYoro873nDtGUreUTOUMVPo4`, 
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im53bGR5dWxubXlxcmxkanZjdW1vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ2NjY4OTEsImV4cCI6MjA4MDI0Mjg5MX0.EkoQ3jBYi_1FgUrE956NYoro873nDtGUreUTOUMVPo4`,
      }
    }
  );

  const res = await data.json();
  console.log("Data fra supaBase:", res);

  return res;
}

export async function getDataProdukt( {id} ) {

    const data = await fetch(
    `https://nwldyulnmyqrldjvcumo.supabase.co/rest/v1/produkter?id=eq.${id}`,
    {
      headers: {
        apikey: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im53bGR5dWxubXlxcmxkanZjdW1vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ2NjY4OTEsImV4cCI6MjA4MDI0Mjg5MX0.EkoQ3jBYi_1FgUrE956NYoro873nDtGUreUTOUMVPo4`, 
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im53bGR5dWxubXlxcmxkanZjdW1vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ2NjY4OTEsImV4cCI6MjA4MDI0Mjg5MX0.EkoQ3jBYi_1FgUrE956NYoro873nDtGUreUTOUMVPo4`,
      }
    }
  );

  const res = await data.json();
  console.log("Data fra supaBase:", res);

  return res;
}

export async function getDataAlleArtikler() {


    const data = await fetch(
    `https://nwldyulnmyqrldjvcumo.supabase.co/rest/v1/artikler?select=*`,
    {
      headers: {
        apikey: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im53bGR5dWxubXlxcmxkanZjdW1vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ2NjY4OTEsImV4cCI6MjA4MDI0Mjg5MX0.EkoQ3jBYi_1FgUrE956NYoro873nDtGUreUTOUMVPo4`, 
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im53bGR5dWxubXlxcmxkanZjdW1vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ2NjY4OTEsImV4cCI6MjA4MDI0Mjg5MX0.EkoQ3jBYi_1FgUrE956NYoro873nDtGUreUTOUMVPo4`,
      }
    }
  );

  const res = await data.json();
  console.log("Data fra supaBase:", res);

  return res;
}

export async function getDataArtikel(id) {

    const data = await fetch(
    `https://nwldyulnmyqrldjvcumo.supabase.co/rest/v1/artikler?id=eq.${id}`,
    {
      headers: {
        apikey: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im53bGR5dWxubXlxcmxkanZjdW1vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ2NjY4OTEsImV4cCI6MjA4MDI0Mjg5MX0.EkoQ3jBYi_1FgUrE956NYoro873nDtGUreUTOUMVPo4`, 
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im53bGR5dWxubXlxcmxkanZjdW1vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ2NjY4OTEsImV4cCI6MjA4MDI0Mjg5MX0.EkoQ3jBYi_1FgUrE956NYoro873nDtGUreUTOUMVPo4`,
      }
    }
  );

  const res = await data.json();
  console.log("Data fra supaBase:", res);

  return res;
}

export async function getDataTaeller() {
  const data = await fetch(
    `https://nwldyulnmyqrldjvcumo.supabase.co/rest/v1/taeller?select=*`,
    {
      headers: {
        apikey: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im53bGR5dWxubXlxcmxkanZjdW1vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ2NjY4OTEsImV4cCI6MjA4MDI0Mjg5MX0.EkoQ3jBYi_1FgUrE956NYoro873nDtGUreUTOUMVPo4`, 
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im53bGR5dWxubXlxcmxkanZjdW1vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ2NjY4OTEsImV4cCI6MjA4MDI0Mjg5MX0.EkoQ3jBYi_1FgUrE956NYoro873nDtGUreUTOUMVPo4`,
      }
    }
  );

  const res = await data.json();
  console.log("Data fra supaBase:", res);

  return res;
}
