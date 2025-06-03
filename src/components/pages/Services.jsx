import React from "react"
import { Heading } from "../common/Heading"
import { services } from "../data/dummydata"

export const Services = () => {
  return (
    <>
      <section className='services'>
        <div className='container'>
          <Heading title='Compétence technique' />
          <div className='content grid3'>
            {services.map((item) => (
              <div className='box' data-aos='flip-left' key={item.id}>
                <i>{item.icon}</i>
                <h3>{item.title}</h3>
                {/* Affichage des images et légendes depuis item.desc */}
                <div className='desc-list'>
                  {item.desc.map((descItem, i) => (
                    <div className='desc-item' key={i}>
                      {/* Si descItem.image est non vide on affiche l'image, sinon on saute */}
                      {descItem.image && (
                        <img
                          src={descItem.image}
                          alt={descItem.name}
                          className='desc-image'
                        />
                      )}
                      {/* Toujours afficher le texte */}
                      <p className='desc-name'>{descItem.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}