import { useState } from 'react'

import Star from '@/components/star-page/star'

import { AiFillFire, AiOutlineDesktop } from 'react-icons/ai'

export default function StarPage() {
  const [productRating, setProductRating] = useState(2)
  return (
    <>
      <h1>星星評分頁面</h1>
      <Star
        starCount={6}
        initRating={productRating}
        onRatingChange={setProductRating}
        color="blue"
        icon={<AiOutlineDesktop />}
      />
      <Star
        starCount={6}
        initRating={productRating}
        onRatingChange={setProductRating}
        color="blue"
        icon={<AiFillFire />}
      />
    </>
  )
}
