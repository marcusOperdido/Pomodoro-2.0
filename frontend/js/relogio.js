const [tempo, setTempo] = useState(25);
const [minutos, setMinutos] = useState(25);
const [segundos, setSegundos] = useState(0);
const [rodando, setRodando] = useState(false);

useEffect(() => {
  if (!rodando) return;

  const interval = setInterval(() => {
    setSegundos((s) => {
      if (s > 0) return s - 1;

      setMinutos((m) => {
        if (m === 0) {
          setRodando(false);
          return 0;
        }
        return m - 1;
      });

      return 59;
    });
  }, 1000);

  return () => clearInterval(interval);
}, [rodando]);

const start = () => {
  if (minutos === 0 && segundos === 0) {
    setMinutos(tempo);
  }
  setRodando(true);
};

const pause = () => setRodando(false);

const reset = () => {
  setRodando(false);
  setMinutos(tempo);
  setSegundos(0);
};