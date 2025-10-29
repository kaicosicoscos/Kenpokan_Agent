"use client";
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
    const userAge = parseInt(age);
    const isKid = userAge < 13;
    const isTeen = userAge >= 13 && userAge <= 17;
    const group = isKid ? 'Kinder' : isTeen ? 'Jugend' : 'Erwachsene';

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
    <div className="max-w-xl mx-auto mt-10 space-y-6">
      <div className="bg-white shadow rounded-xl p-6 space-y-4">
        {step === 0 && (
          <>
            <h2 className="text-xl font-semibold">Probetraining finden</h2>
            <input placeholder="Wie alt bist du oder dein Kind?" value={age} onChange={(e) => setAge(e.target.value)} className="w-full border p-2 rounded" />
            <input placeholder="Was interessiert dich? (z. B. Boxen, BJJ, CrossFit)" value={interest} onChange={(e) => setInterest(e.target.value)} className="w-full border p-2 rounded" />
            <input placeholder="Hast du schon Erfahrung? (optional)" value={experience} onChange={(e) => setExperience(e.target.value)} className="w-full border p-2 rounded" />
            <input placeholder="Wann kannst du trainieren? (z. B. Mo/Di abends)" value={timeslot} onChange={(e) => setTimeslot(e.target.value)} className="w-full border p-2 rounded" />
            <button onClick={handleSubmit} className="bg-black text-white px-4 py-2 rounded">Vorschläge anzeigen</button>
          </>
        )}

        {step === 1 && (
          <>
            <h2 className="text-xl font-semibold mb-2">Kursvorschläge</h2>
            {suggestions.map((s, i) => (
              <div key={i} className="border p-3 rounded-xl mb-3 bg-gray-50">
                <p><strong>{s.kursname}</strong></p>
                <p>{s.tag}, {s.zeit}</p>
                <p>Trainer: {s.trainer} – Ort: {s.ort}</p>
              </div>
            ))}
            <button onClick={handleReservation} className="bg-black text-white px-4 py-2 rounded">Einen Termin reservieren</button>
          </>
        )}

        {step === 2 && (
          <>
            <h2 className="text-xl font-semibold">Vormerkung</h2>
            <input placeholder="Dein Name" value={name} onChange={(e) => setName(e.target.value)} className="w-full border p-2 rounded" />
            <input placeholder="Deine E-Mail-Adresse" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border p-2 rounded" />
            <p className="text-sm text-muted-foreground mt-2">
              Wir melden uns per Mail zur Bestätigung. Für Rückfragen steht unser Team am Tresen bereit.
            </p>
          </>
        )}
      </div>
    </div>
  );
}