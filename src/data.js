//image imports
import edward from './img/edward.jpg';
import naruto from './img/naruto.jpg';
import luffy from './img/luffy.jpg';
import saitama from './img/saitama.jpg';
import goku from './img/goku.png';
import vegeta from './img/vegeta.jpg';
import yuji from './img/yuji.jpg';
import yusuke from './img/yusuke.jpg';

// Edward sounds
import bravo from './sounds/edward/bravo.mp4';
import feijao from './sounds/edward/feijao.mp4';
import projeto from './sounds/edward/projeto.mp4';
import pulgar from './sounds/edward/pulgar.mp4';
import vermelho from './sounds/edward/vermelho.mp4';

// Goku sounds
import eusou from './sounds/goku/eusou.mp4';
import fracassado from './sounds/goku/fracassado.mp4';
import furioso from './sounds/goku/furioso.mp4';
import ideias from './sounds/goku/ideias.mp4';
import nojo from './sounds/goku/nojo.mp4';

// Naruto sounds
import comoé from './sounds/naruto/comoé.mp4';
import esqueceu from './sounds/naruto/esqueceu.mp4';
import louca from './sounds/naruto/louca.mp4';
import nãogosto from './sounds/naruto/não gosto.mp4';
import taradinho from './sounds/naruto/taradinho.mp4';

// Luffy sounds
import camelo from './sounds/luffy/camelo.mp4';
import cerejeira from './sounds/luffy/cerejeira.mp4';
import chinela from './sounds/luffy/chinela.mp4';
import épedraé from './sounds/luffy/épedraé.mp4';
import logica from './sounds/luffy/logica.mp4';

// Saitama sounds
import ata from './sounds/saitama/ata.mp4';
import carcereira from './sounds/saitama/carcereira.mp4';
import louça from './sounds/saitama/Louça.mp4';
import nº2 from './sounds/saitama/nº2.mp4';
import trave from './sounds/saitama/trave.mp4';

// Vegeta sounds
import bomhumor from './sounds/vegeta/bomhumor.mp4';
import bulma from './sounds/vegeta/bulma.mp4';
import classico from './sounds/vegeta/classico.mp4';
import encher from './sounds/vegeta/encher.mp4';
import idiota from './sounds/vegeta/idiota.mp4';
import puro from './sounds/vegeta/puro.mp4';

// Yuji sounds
import bestofrindo from './sounds/yuji/bestofrindo.mp4';
import entendi from './sounds/yuji/entendi.mp4';
import okay from './sounds/yuji/okay.mp4';
import vambora from './sounds/yuji/vambora.mp4';
import VanDaine from './sounds/yuji/VanDaine.mp4';

// Yusuke sounds
import altura from './sounds/yusuke/altura.mp4';
import fome from './sounds/yusuke/fome.mp4';
import penalte from './sounds/yusuke/penalte.mp4';
import Popó from './sounds/yusuke/Popó.mp4';
import samba from './sounds/yusuke/samba.mp4';

const data = [
    {
        id: 1,
        name: 'edward',
        image: edward,
        sounds: [bravo, feijao, projeto, pulgar, vermelho],
        soundNames: ['bravo', 'feijao', 'projeto', 'pulgar', 'vermelho']
    },
    {
        id: 2,
        name: 'naruto',
        image: naruto,
        sounds: [comoé, esqueceu, louca, nãogosto, taradinho],
        soundNames: ['comoé', 'esqueceu', 'louca', 'não gosto', 'taradinho']
    },
    {
        id: 3,
        name: 'luffy',
        image: luffy,
        sounds: [camelo, cerejeira, chinela, épedraé, logica],
        soundNames: ['camelo', 'cerejeira', 'chinela', 'épedraé', 'logica']
    },
    {
        id: 4,
        name: 'saitama',
        image: saitama,
        sounds: [ata, carcereira, louça, nº2, trave],
        soundNames: ['ata', 'carcereira', 'louça', 'nº2', 'trave']
    },
    {
        id: 5,
        name: 'yusuke',
        image: yusuke,
        sounds: [altura, fome, penalte, Popó, samba],
        soundNames: ['altura', 'fome', 'penalte', 'Popó', 'samba']
    },
    {
        id: 6,
        name: 'yuji',
        image: yuji,
        sounds: [bestofrindo, entendi, okay, vambora, VanDaine],
        soundNames: ['bestofrindo', 'entendi', 'okay', 'vambora', 'VanDaine']
    },
    {
        id: 7,
        name: 'goku',
        image: goku,
        sounds: [eusou, fracassado, furioso, ideias, nojo],
        soundNames: ['eusou', 'fracassado', 'furioso', 'ideias', 'nojo']
    },
    {
        id: 8,
        name: 'vegeta',
        image: vegeta,
        sounds: [bomhumor, bulma, classico, encher, idiota, puro],
        soundNames: ['bomhumor', 'bulma', 'classico', 'encher', 'idiota', 'puro']
    }
];

export default data;
