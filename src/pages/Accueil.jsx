import React, { useState, useEffect } from 'react';
import '../App.css';
import '../Components/Acceuil.css'


function Accueil() {
  let photo1 = {
    photo: "/Photos/devanture.jpg",
    nom: "photo1"
  };
  let photo2 = {
    photo: "/Photos/salle.jpg",
    nom: "photo2"
  };
  let photo3 = {
    photo: "/Photos/bar.jpg",
    nom: "photo3"
  };

  const [index, setIndex] = useState(0);
  const photosToggle = [photo1, photo2, photo3];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % photosToggle.length);
    }, 2500);
    return () => clearInterval(timer);
  }, [photosToggle.length]);

  return (
    <>
      <div>
        <img className="slide" src={photosToggle[index].photo} alt={photosToggle[index].nom} />
      </div>
      <div className="text">
      <div className="presentation">
        <div className='presResto'>
        <h4>Notre restaurant</h4>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus neque architecto debitis, excepturi error explicabo adipisci totam ipsa quasi quae esse odit temporibus labore maxime illum eaque quis facere cumque?
          Dolore, cupiditate voluptates necessitatibus porro fuga adipisci animi iste minus, modi, fugiat ipsam consectetur sed id! Aliquid, dolores, sit natus neque recusandae ab porro non blanditiis, suscipit nesciunt voluptatum quas.
          Magni perferendis fuga id ut maiores cumque vitae placeat totam ex repudiandae doloremque dolorem, aut itaque nihil tempora culpa a molestias. Veniam quo est ipsa dicta. Provident maxime debitis magni.
          In ratione labore explicabo et consequuntur, ipsam error dignissimos iure eius illum nemo fuga voluptates ullam eaque quis quasi animi magni. Cum dolore sequi sint commodi. Iste sed eum quis?
          Adipisci voluptas, optio, nulla, animi ipsa asperiores tenetur sit rem maxime similique ex tempora esse iste eum quo eius facere iusto. Perferendis perspiciatis praesentium reprehenderit? Distinctio repellat neque odit hic!
          Modi dolorem molestiae illum et doloribus facilis laborum, quas ducimus, perspiciatis dolor mollitia provident, sit accusantium debitis maxime quae architecto similique voluptatum? Officiis numquam facilis rem necessitatibus provident modi voluptate?
          Nisi laudantium architecto voluptates? Libero cum perspiciatis fuga quam, dolore eius dolorem suscipit iure, nemo tenetur officiis eaque consequuntur pariatur neque illo ullam eligendi, sed odit corporis ea. Totam, iure?
          Beatae eaque cum incidunt atque voluptatibus, quae asperiores voluptas dolore reiciendis ut eos. Minus velit fuga eum quisquam quam ratione voluptas, soluta veniam, obcaecati enim optio repudiandae sit laborum praesentium.
          Totam error, dolorum exercitationem aliquam dolorem obcaecati odit veniam nobis, sapiente illum reprehenderit aliquid aperiam omnis, eligendi deleniti itaque temporibus impedit perferendis quasi. Tenetur aspernatur suscipit dolor deleniti sint provident.
        </p>
      </div>
        <div className='presChef'>
          <img className='chef' src="/Photos/chef.jpg" alt="" />
          <div>
          <h4>Notre chef</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas error ab odio rerum eligendi voluptatibus ratione vel placeat id dolore distinctio, reiciendis fugiat blanditiis maiores deleniti quisquam minima optio illum.
          Natus ullam ipsum vel, delectus odio vero! Ratione sapiente sed, dignissimos a officia unde ducimus numquam eum aut error rerum est distinctio rem totam. Voluptatem recusandae illo ut laborum officiis.
          Consequuntur magnam aperiam ab, voluptatibus quibusdam tenetur non asperiores. Earum saepe nemo dolorum accusamus est nostrum, natus sint dolores molestias fuga eveniet odit perferendis obcaecati officiis quidem, doloribus, sequi aliquid.
          Voluptas debitis aliquid reiciendis soluta incidunt nostrum cupiditate, reprehenderit fuga temporibus suscipit id at veniam voluptate, illo ut labore nemo unde alias architecto eum optio accusamus vitae dignissimos! Cum, eum?
          Dolore beatae, iusto atque exercitationem asperiores voluptas quod rerum culpa, quis libero odio natus adipisci quisquam architecto? Mollitia fuga cumque expedita. Mollitia aperiam ipsum esse quasi odio atque totam hic.
          Voluptatum eos nemo sed, velit ipsum porro sit, alias autem, totam quidem iure. Eaque, rerum eos! Optio ratione modi rerum itaque dolorum necessitatibus, ea quasi aut laboriosam quos non cum.
          Veniam deserunt sit rerum unde facilis sunt voluptatum rem maiores adipisci vel mollitia, explicabo reprehenderit dolores quam magnam natus corporis. Earum atque inventore aperiam aspernatur eius voluptas, sequi praesentium! Dicta.
          Illo at repudiandae pariatur soluta expedita rem quis totam, deleniti, voluptatem, aperiam velit alias iusto ea sunt maiores ex cupiditate architecto ipsa quaerat. Eligendi deserunt consequatur aut est perferendis odit.
          Laudantium officia ipsam praesentium ut quisquam, amet placeat atque debitis qui ratione saepe sequi consequatur, rerum nihil vero quasi? Nesciunt incidunt quibusdam laudantium dignissimos vero neque ipsam repellendus expedita repudiandae.
          Amet quo molestias error. Dolore culpa tempora id iste expedita. Delectus, tenetur quos voluptates minima repellat suscipit at dignissimos recusandae, soluta officia ullam dolore perspiciatis! Maiores deserunt ipsam rem eveniet.
        </p>
        </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Accueil;