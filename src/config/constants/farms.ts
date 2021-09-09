import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 1,
    risk: 5,
    lpSymbol: 'CORX-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x58af6c212292aa9c73003cc074c46f9414a09c95',
    },
    tokenSymbol: 'CORX',
    tokenAddresses: {
      97: '',
      56: '0x141383cdb8158982fb3469c3e49cc82f8026d968',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 3,
    risk: 5,
    lpSymbol: 'CORX-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x05a6071e03c012b8d20a9bbef1d711e465ac0d7f',
    },
    tokenSymbol: 'CORX',
    tokenAddresses: {
      97: '',
      56: '0x141383cdb8158982fb3469c3e49cc82f8026d968',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 2,
    risk: 5,
    lpSymbol: 'CORX Staking',
    lpAddresses: {
      97: '',
      56: '0x141383cdb8158982fb3469c3e49cc82f8026d968',
    },
    tokenSymbol: 'CORX',
    tokenAddresses: {
      97: '',
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.CAKE,
    quoteTokenAdresses: contracts.cake,
  },
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'BNB-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f',
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
 {
    pid: 4,
    risk: 5,
    lpSymbol: 'CHARLES-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x193f513f29abe72abfccb716b6dce57d0ac5b032',
    },
    tokenSymbol: 'CHARLES',
    tokenAddresses: {
      97: '',
      56: '0x31f22742e4987be1776c76366f5972844e7cac07',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
]

export default farms
