import React from 'react'
import Radium from 'radium'
import { Dashboard, Widget, WidgetText, WidgetTitle, Grid, Cell } from 'reactivity'
import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/build/image-gallery.css!'

@Radium
class ImageGalleryPage extends React.Component {    
    constructor() {
		super();
		this.state = {
			images: [
                {
                    original: 'http://lorempixel.com/1000/600/nature/1/',
                    thumbnail: 'http://lorempixel.com/250/150/nature/1/',
                    originalClass: 'featured-slide',
                    thumbnailClass: 'featured-thumb',
                    description: 'Optional description...'
                },
                {
                    original: 'http://lorempixel.com/1000/600/nature/2/',
                    thumbnail: 'http://lorempixel.com/250/150/nature/2/'
                },
                {
                    original: 'http://lorempixel.com/1000/600/nature/3/',
                    thumbnail: 'http://lorempixel.com/250/150/nature/3/'
                }
            ]
		};
	}
    
	render() {		
		return <Dashboard>
				<Widget width={12}>
					<WidgetTitle title='Image gallery' />
					<WidgetText>
                        <Grid>
							<Cell size='1/3'>                            
                                <ImageGallery 
                                    items={this.state.images} 
                                    autoPlay={true}
                                    slideInterval={4000} 
                                />
                            </Cell>
                        </Grid>
					</WidgetText>
				</Widget>
			</Dashboard>
	}
}

export default ImageGalleryPage