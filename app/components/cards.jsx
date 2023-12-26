function Making(props) {

    const names = [
        {  image:"https://images.pexels.com/photos/1413412/pexels-photo-1413412.jpeg?auto=compress&cs=tinysrgb&w=600",name: "Thunderstrike.50 Caliber",dis: " Unleash the thunder with this powerful .50 caliber bullet designed for long-range precision shooting." },
        {  image:"https://images.pexels.com/photos/19531357/pexels-photo-19531357/free-photo-of-man-riding-a-motorbike-on-a-street.jpeg?auto=compress&cs=tinysrgb&w=600", name: "Venom Viper Hollow Point",dis: "Infused with venomous precision, the Viper Hollow Point ensures deadly accuracy and swift impact." },
        { image:"https://images.pexels.com/photos/1715193/pexels-photo-1715193.jpeg?auto=compress&cs=tinysrgb&w=600",  name: "Rapid Fury Armor-Piercing",dis: "For rapid response and unstoppable force, the Rapid Fury Armor-Piercing bullet penetrates defenses with ease." },
        { image:"https://images.pexels.com/photos/899238/pexels-photo-899238.jpeg?auto=compress&cs=tinysrgb&w=600",  name: "Silent Shadow Subsonic",dis: "Strike silently but deadly with the Silent Shadow Subsonic bullet, designed for covert operations and stealth." },
        { image:"https://images.pexels.com/photos/17944592/pexels-photo-17944592/free-photo-of-black-royal-enfield-hunter-350.jpeg?auto=compress&cs=tinysrgb&w=600",  name: "Inferno Dragon Incendiary",dis: "Set your enemies ablaze with the Inferno Dragon Incendiary bullet, leaving destruction in its fiery wake." },
        { image:"https://images.pexels.com/photos/17944592/pexels-photo-17944592/free-photo-of-black-royal-enfield-hunter-350.jpeg?auto=compress&cs=tinysrgb&w=600",  name: "Steel Cyclone FMJ",dis: "Unleash the relentless force of the Steel Cyclone Full Metal Jacket bullet, built for maximum penetration and impact." },
        {  image:"https://images.pexels.com/photos/5661487/pexels-photo-5661487.jpeg?auto=compress&cs=tinysrgb&w=600", name: "Icebreaker Frangible",dis: "Break the ice with the Icebreaker Frangible bullet, designed to disintegrate upon impact for reduced collateral damage." },
        { image:"https://images.pexels.com/photos/5959137/pexels-photo-5959137.jpeg?auto=compress&cs=tinysrgb&w=600",  name: "Shockwave Taser Round",dis: "Electrify your targets with the Shockwave Taser Round, delivering a stunning and non-lethal charge." },
        { image:"https://images.pexels.com/photos/4297503/pexels-photo-4297503.jpeg?auto=compress&cs=tinysrgb&w=600",  name: "Phantom Ejector Sabot",dis: "The Phantom Ejector Sabot bullet features a unique sabot design, enhancing accuracy and precision at high velocities." },
        { image:"https://images.pexels.com/photos/4297506/pexels-photo-4297506.jpeg?auto=compress&cs=tinysrgb&w=600",  name: "Venomous Fang Hollow Point",dis: "Strike with deadly accuracy using the Venomous Fang Hollow Point bullet, leaving a lethal bite on impact." },
        { image:"https://images.pexels.com/photos/8373456/pexels-photo-8373456.jpeg?auto=compress&cs=tinysrgb&w=600",  name: "Arctic Blizzard Cryo Round",dis: " Freeze your foes in their tracks with the Arctic Blizzard Cryo Round, delivering a chilling effect upon impact." },
        { image:"https://images.pexels.com/photos/1413412/pexels-photo-1413412.jpeg?auto=compress&cs=tinysrgb&w=600",  name: "Titanium Reaper Penetrator",dis: "The Titanium Reaper Penetrator bullet boasts exceptional hardness for maximum penetration through armor and barriers." },
        { image:"https://images.pexels.com/photos/1413412/pexels-photo-1413412.jpeg?auto=compress&cs=tinysrgb&w=600",  name: "Whispering Ghost Suppressed",dis: "Become the Whispering Ghost with the Suppressed bullet, designed for discreet and silent operations." },
        { image:"https://images.pexels.com/photos/1413412/pexels-photo-1413412.jpeg?auto=compress&cs=tinysrgb&w=600", name: "Solar Flare Tracer Round",dis: "Light up the battlefield with the Solar Flare Tracer Round, leaving a fiery trail in its wake for improved visibility." },
        { image:"https://images.pexels.com/photos/1413412/pexels-photo-1413412.jpeg?auto=compress&cs=tinysrgb&w=600", name: "Mjolnir Shockwave",dis: "Channel the power of Mjolnir with the Shockwave bullet, delivering a concussive blast upon impact." },
        { image:"https://images.pexels.com/photos/1413412/pexels-photo-1413412.jpeg?auto=compress&cs=tinysrgb&w=600", name: "Radiant Star Explosive",dis: "Illuminate the sky with the Radiant Star Explosive bullet, causing a spectacular explosion upon contact." },
        { image:"https://images.pexels.com/photos/1413412/pexels-photo-1413412.jpeg?auto=compress&cs=tinysrgb&w=600", name: "Abyssal Blackout Subsonic",dis: "Dive into the abyss with the Abyssal Blackout Subsonic bullet, designed for stealthy underwater operations." },
        { image:"https://images.pexels.com/photos/1413412/pexels-photo-1413412.jpeg?auto=compress&cs=tinysrgb&w=600",  name: "Nova Burst Blinding Round",dis: "Blind your adversaries with the Nova Burst Blinding Round, emitting a blinding flash upon impact." },
         
    
      ];

    return (
        <>
        <div className="grid grid-cols-1 grid-rows-24 md:grid-cols-3 grid-rows-6 gap-4 justify-items-center mt-6  ">
        {names.map((person, index) => (
          <div key={index} className="cardcontainer bg-black max-w-80 max-h-120 rounded-b-lg">
            <img
              src={person.image}
              alt=""
            />
            <div className="p-3 ">
                  <div className="bikename text-white font-bold text-xl">{person.name}</div>
            <div className="carddis text-white tracking-tight">{person.dis}</div>
            <button className="btn bg-blue-900 text-white w-40 mt-3 ">Read More</button>
            </div>
          
          </div>
        ))}
        </div>
      </>
    );
  }
  
  export default Making;
  