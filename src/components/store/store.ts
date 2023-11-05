import { create } from 'zustand'
import { ChoiceItemValue } from '@ingka/choice'
type Giftcard = {
  quantity: string | React.ReactElement<any>
  amount: string | React.ReactElement<any>
}

type Action = {
  updateQuantity: (quantity: Giftcard['quantity']) => void
  updateAmount: (amount: Giftcard['amount']) => void
}

// Create your store, which includes both state and (optionally) actions
export const useStore = create<Giftcard & Action>((set) => ({
  quantity: '',
  amount: '',
  updateQuantity: (quantity) => set(() => ({ quantity: quantity })),
  updateAmount: (amount) => set(() => ({ amount: amount })),
}))