useEffect(() => {
  const loadRegistry = async () => {
    const res = await loadCSV(SHEET_URLS.tables_registry);
    
    const parsed = res.map(row => ({
      key: row.key,
      title: row.title,
      image: row.image,
      url: row.url
    }));

    setTables(parsed);
    setLoading(false);
  };

  loadRegistry();
}, []);