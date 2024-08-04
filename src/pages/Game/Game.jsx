import './Game.css'
import Header from '../../components/Header/Header';
import Cards from '../../components/Cards/Cards';
import ImgLoja from '../../assets/fundo-loja-clara.jpg';
import ImgArena from '../../assets/fundo-arena-clara.jpg';
import ImgMissao from '../../assets/fundo-missoes-clara.jpg';

function Game() {

    const locals = [
        {id: 1, type: "Loja", image: ImgLoja, name: "Feira"},
        {id: 2, type: "Arena", image: ImgArena, name: "Ringue"},
        {id: 3, type: "Missões", image: ImgMissao, name: "Extra"}
    ]

    return (
        <div className='game-page'>
            <Header />
            <div className="destiny-page">
                <h1> Qual será o seu destino? </h1>
                <div className='destiny-container'>
                    {locals.map((local) => {
                        return <Cards 
                            key={local.id}
                            type={local.type}
                            img={local.image}
                            name={local.name}
                        />
                    })}
                </div>
            </div>
        </div>
    )
}

export default Game;