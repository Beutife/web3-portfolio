import pop from '../../../public/images/pop.png';
import cryptodB from '../../../public/images/crypto-dasboard.png';
import Beu from '../../../public/images/Beu.jpg'

export const projects = [
    {
      title: 'Proof of Presence',
      description: 'A Web3 dApp for recording attendance on the blockchain with a sleek UI.',
      techStack: 'React, Tailwind CSS, Solidity, ethers.js, Framer Motion',
      image: pop,
      github: 'https://github.com/Beutife/proof-of-presence',
      demo: 'https://proof-of-presence-three.vercel.app/',
    },
    {
      title: 'Portfolio Website',
      description: 'A personal developer portfolio built with Next.js and Tailwind.',
      techStack: 'Next.js, Tailwind CSS, TypeScript',
      image: Beu,
      github: 'https://github.com/Beutife/web3-portfolio',
      demo: 'https://web3-portfolio-liart.vercel.app/',
    },
    {
        title: 'Crypto Dashboard',
        description: 'A dashboard that visualizes real-time cryptocurrency prices.',
        techStack: 'React, Chart.js, CoinGecko API',
        image: cryptodB,
        github: 'https://github.com/Beutife/crypto-dashboard',
        demo: 'https://crypto-dashboard-virid-sigma.vercel.app/',
      },      
  ];
  