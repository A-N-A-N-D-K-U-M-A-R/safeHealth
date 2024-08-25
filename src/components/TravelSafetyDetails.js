import React from 'react';
import { useParams } from 'react-router-dom';
import '../css/SafetyWellnessDetails.css'; 
import safetyHeat from '../images/Safety_heat.jpg';
import Safety_hydrate from '../images/Safety_hydrate.jpg';

const content1 = <><p>Although most employers have implemented heat safety measures on the job, many heat-related illness myths persist and can cost workers their health and even their lives. </p>
    <p>Four myths we hear frequently: </p>
    <p><strong>Myth 1: Acclimated, hydrated workers are protected from heat-related illnesses.</strong><br />
        Heat acclimatization and hydration are crucial protections for working in the heat, but they don’t make anyone invincible. Working in conditions that are hot or even working hard in warm conditions can cause a worker’s body temperature to rise above what it can handle. So even a well-hydrated, heat-acclimated person can suffer from heat-related illness up to and including heatstroke if they get so hot that their body can’t cool down to a safe temperature. Be sure you’re including body-cooling personal protective equipment and other heat safety measures for workers in the heat.</p>
    <p><strong>Myth 1: Acclimated, hydrated workers are protected from heat-related illnesses.</strong><br />
        Heat acclimatization and hydration are crucial protections for working in the heat, but they don’t make anyone invincible. Working in conditions that are hot or even working hard in warm conditions can cause a worker’s body temperature to rise above what it can handle. So even a well-hydrated, heat-acclimated person can suffer from heat-related illness up to and including heatstroke if they get so hot that their body can’t cool down to a safe temperature. Be sure you’re including body-cooling personal protective equipment and other heat safety measures for workers in the heat.</p>
    <p><strong>Myth 1: Acclimated, hydrated workers are protected from heat-related illnesses.</strong><br />
        Heat acclimatization and hydration are crucial protections for working in the heat, but they don’t make anyone invincible. Working in conditions that are hot or even working hard in warm conditions can cause a worker’s body temperature to rise above what it can handle. So even a well-hydrated, heat-acclimated person can suffer from heat-related illness up to and including heatstroke if they get so hot that their body can’t cool down to a safe temperature. Be sure you’re including body-cooling personal protective equipment and other heat safety measures for workers in the heat.</p>
    <p><strong>Myth 4: Get a heatstroke victim into an ambulance ASAP.</strong><br />
        Heatstroke is a medical emergency, so assigning a bystander to call 911 immediately is the right thing to do. But be sure that your team and the EMS team understand the “Cool first, transport second” protocol. Organ, brain and tissue damage from heatstroke can continue as someone is being transported to the hospital. That’s why it’s crucial to cool down the victim to a safe body temperature via full-body immersion in ice water before loading them into an ambulance. Immersion should begin as soon as possible on the jobsite. Allow EMS to determine the worker’s body temperature when they arrive to find out if transport is safe. Fortunately, many ambulances have started to add ice water immersion capabilities to their vehicles, but you should advocate for your workers to ensure the right measures are in place.</p>
</>
const content2=<div class="body gsd-paywall"><p>Proper hydration is essential for preventing heat-related illnesses.</p>
<p>In a recently published tip sheet, OSHA explains that our bodies heat up as we work and cool down through sweating. This can lead to dehydration and a heat-related illness.</p>
<p>Tips for employers:</p><ul>
<li>Educate workers on the importance of hydration and what to avoid.
</li><li>Equip all work areas with accessible and visible cool water (less than 60° F).
</li><li>Encourage workers to drink at least 1 cup (8 ounces) of water every 15-20 minutes while working in the heat, not just when they’re thirsty.
</li><li>Maintain a cool or shaded location for rest breaks.
</li><li>Designate a relief person so workers can take a water break, or have water brought directly to workers who can’t leave their work area.
</li><li>Encourage workers to keep a sealable bottle of cool water in their work area so they can hydrate.
</li><li>Consider providing electrolyte products when workers perform strenuous, sweat-producing job tasks for extended periods of time.</li></ul>

<p>Taking scheduled meal breaks, OSHA adds, will help replace lost electrolytes.</p>
<p>Finally, workers should hydrate before, during and after work. </p>
<p>“Chronic dehydration increases the risk for medical conditions such as kidney stones,” the agency says.</p></div>

const topics = [
    {
        id: 1,
        title: 'Travel What are some common misconceptions about treating heat-related illnesses?',
        content: content1,
        image: safetyHeat,
    },
    {
        id: 2,
        title: 'Travel Keep workers hydrated',
        content: content2,
        image: Safety_hydrate,
    },
];

const TravelSafetyDetails = () => {
    const { id } = useParams();
    const topic = topics.find((topic) => topic.id === parseInt(id));

    if (!topic) {
        return <h2>Topic not found</h2>;
    }

    return (
        <div className="safetywellness-details-container">
            <h1>{topic.title}</h1>
            <img src={topic.image} alt={topic.title} />
            <p>{topic.content}</p>
        </div>
    );
};

export default TravelSafetyDetails;
