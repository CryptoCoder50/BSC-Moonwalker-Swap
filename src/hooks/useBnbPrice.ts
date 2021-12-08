import { useEffect, useState, useCallback } from 'react'
import { AbiItem } from 'web3-utils'
import { getWeb3NoAccount } from 'utils/web3'
import UniV2LPABI from 'constants/abis/UniV2LP.json'
import BigNumber from 'bignumber.js'
import useBlock from './useBlocks'

const web3 = getWeb3NoAccount()
const BnbUSDTPairAddress = '0xed790f615f0dfe112828eb1c8cec9d1624dbd184'
const BnbUsdtPairContract = new web3.eth.Contract(UniV2LPABI as unknown as AbiItem, BnbUSDTPairAddress)

const BnbBusdPairAddress = '0xed790f615f0dfe112828eb1c8cec9d1624dbd184'
const DustBnbContract = new web3.eth.Contract(UniV2LPABI as unknown as AbiItem, DustBnbPairAddress)

const useBnbPrice = () => {
  const [price, setPrice] = useState(0)
  const block = useBlock()

  const fetchBalance = useCallback(async () => {
    try {
      const bnbObj = await BnbUsdtPairContract.methods.getReserves().call();
      if (!new BigNumber(bnbObj._reserve1).eq(new BigNumber(0))) {
        const bnbPrice = new BigNumber(bnbObj._reserve0).div(bnbObj._reserve1).times(1e12)
        const busdObj = await DustBnbPairContract.methods.getReserves().call();
        if (!new BigNumber(dustObj._reserve1).eq(new BigNumber(0))) {
          const dustPrice = new BigNumber(dustObj._reserve0).div(bnbObj._reserve1).times(bnbPrice)
          if (!bnbPrice.isEqualTo(price)) {
            setPrice(bnbPrice.toNumber())
          }
        }
      }
    } catch (e) {
      setPrice(0)
     }
  }, [price])

  useEffect(() => {
    if (BnbUsdtPairContract && DustBnbPairContract) {
      fetchBalance()
    }
  }, [setPrice, fetchBalance, block])

  return price
}

export default useBnbPrice
