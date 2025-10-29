import { useState } from 'react';

export default function KenpokanAgent() {
  const [step, setStep] = useState(0);
  const [age, setAge] = useState('');
  const [interest, setInterest] = useState('');
  const [experience, setExperience] = useState('');
  const [timeslot, setTimeslot] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    const fakeCourses = [
      {
        kursname: 'Boxen',
        tag: 'Dienstag',
        zeit: '18:30–20:00',
        trainer: 'Freddy',
        ort: 'Boxhalle'
      },
      {
        kursname: 'BJJ – No Gi',
        tag: 'Mittwoch',
        zeit: '18:00–19:30',
        trainer: 'Daniel',
        ort: 'Gracie Barra Halle'
      }
    ];
    setSuggestions(fakeCourses);
    setStep(1);
  };

  const handleReservation = () => {
    setStep(2);
  };

  return (
    <div style={{ maxWidth: 600, margin: '2rem auto', padding: 20, fontFamily: 'sans-serif' }}>
      {step === 0 && (
        <>
          <h2>Probetraining finden</h2>
          <input placeholder="Wie alt bist du oder dein Kind?" value={age} onChange={e => setAge(e.target.value)} />
          <input placeholder="Was interessiert dich? (z. B. Boxen, BJJ, CrossFit)" value={interest} onChange={e => setInterest(e.target.value)} />
          <input placeholder="Hast du schon Erfahrung? (optional)" value={experience} onChange={e => setExperience(e.target.value)} />
          <input placeholder="Wann kannst du trainieren? (z. B. Mo/Di abends)" value={timeslot} onChange={e => setTimeslot(e.target.value)} />
          <button onClick={handleSubmit}>Vorschläge anzeigen</button>
        </>
      )}

      {step === 1 && (
        <>
          <h2>Kursvorschläge</h2>
          {suggestions.map((s, i) => (
            <div key={i} style={{ border: '1px solid #ccc', padding: 10, marginBottom: 10 }}>
              <strong>{s.kursname}</strong><br />
              {s.tag}, {s.zeit}<br />
              Trainer: {s.trainer} – Ort: {s.ort}
            </div>
          ))}
          <button onClick={handleReservation}>Einen Termin reservieren</button>
        </>
      )}

      {step === 2 && (
        <>
          <h2>Vormerkung</h2>
          <input placeholder="Dein Name" value={name} onChange={e => setName(e.target.value)} />
          <input placeholder="Deine E-Mail-Adresse" value={email} onChange={e => setEmail(e.target.value)} />
          <p>Wir melden uns per Mail zur Bestätigung. Für Rückfragen steht unser Team am Tresen bereit.</p>
        </>
      )}
    </div>
  );
}