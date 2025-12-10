// 🚚 ENQUÊTE TRANSPORT DE MARCHANDISES
// Based on the French freight transport questionnaire

export const templateSurveyQuestions = [
    // POSTE - Survey position (pre-filled by surveyor)    // Q1 - RER usage filter
    {
        id: "Q1",
        text: "Commune de provenance",
        type: 'commune',
        next: "Q2"
    },

    // Q2 - Bus usage filter
    {
        id: "Q2",
        text: "Motif de stationnement",
         type: 'singleChoice',
        options: [
            { id: 1, text: "Travail", next: "end" },
            { id: 2, text: "Études", next: "end" },
            { id: 3, text: "Déplacement professionnel", next: "end" },
            { id: 4, text: "Autres (achats, demarches administratives, rdv médical, visite)", next: "end" }
        ]
    },

];

/*
🎯 FLASH SURVEY STRUCTURE:

⚡ FLOW:
POSTE → Q1 → Q2 → Q2A/Q3 → end

📋 POSTE - POSITIONS D'ENQUÊTE:
- Passerelle côté Est (en haut, montants uniquement)
- Passerelle côté Ouest (en haut, montants uniquement)
- PASO côté Est (personnes qui descendent les escaliers)
- PASO côté Ouest (en bas des escaliers, entrants uniquement)

🔀 ROUTING LOGIC:
- POSTE: Surveyor position (pre-filled, fixed per surveyor)
- Q1: RER user? → Yes = END / No = Q2
- Q2: Bus user? → Yes = Q2A (origin+destination) / No = Q3 (origin+destination)
- Q2A: Origin type → Quartier or Gare routière (with bus number)
- Q2B: Destination type → Quartier or Gare routière (with bus number)
- Q3: Simple origin + destination for non-bus/non-RER users

✅ FEATURES:
- Ultra-short survey (maximum 4-5 questions)
- Filters out RER users immediately
- Separate flow for bus vs non-bus users
- Allows back navigation if user makes mistake
- Position tracking for data analysis (1 surveyor per position, no rotation)
*/