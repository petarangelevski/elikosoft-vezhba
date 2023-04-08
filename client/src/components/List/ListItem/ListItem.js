import React from 'react';
import './ListItem.css'

const ListItem = ({ item }) => (
  <div className='listItem-wrap'>
		<div className='col my-3'>
			<div className='card h-100'>
				<a href='#!' className='image-tag'>
					<img
						className='img-fluid w-100'
						src={item.image_path}
						alt='product'
					/>
				</a>

				<div className='card-body text-center'>
					<h5 className='product-name'>{item.product_name}</h5>
					<hr />
					<h6 className='mb-3'>
						<span className='text-secondary mr-2'>
							{item.price.toLocaleString('en-US', {
								style: 'currency',
								currency: 'USD',
							})}
						</span>
					</h6>
					<p>
						{item.product_description.length > 200
							? item.product_description.substring(0, 200) + '...'
							: item.product_description.substring(0, 200)}
					</p>
				</div>
			</div>
		</div>
  </div>
);

export default ListItem;
