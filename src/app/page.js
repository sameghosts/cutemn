import Image from 'next/image'

import src1 from '../../public/1.svg'
import src2 from '../../public/2.svg'
import src3 from '../../public/3.svg'
import src4 from '../../public/4.svg'
import src5 from '../../public/5.svg'
import src6 from '../../public/6.svg'

export default function Home() {
	return (
		<main>
			<div id='Src1'>
				<Image priority src={src1} alt='Cute MN Splash' />
			</div>

			<div id='Src2'>
				<Image priority src={src2} alt='Cute MN Splash' />
			</div>

			<div id='Src3'>
				<Image priority src={src3} alt='Cute MN Splash' />
			</div>

			<div id='Src4'>
				<Image priority src={src4} alt='Cute MN Splash' />
			</div>

			<div id='Src5'>
				<Image priority src={src5} alt='Cute MN Splash' />
			</div>

			<div id='Src6'>
				<Image priority src={src6} alt='Cute MN Splash' />
			</div>
		</main>
	)
}
