import React from 'react'
import Radium from 'radium'
import { RaisedButton } from 'material-ui'
import { Dashboard, Widget, WidgetText, WidgetTitle, Grid, Cell } from 'reactivity'
import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/build/image-gallery.css!'

@Radium
class ImageGalleryPage extends React.Component {    
    constructor() {
		super();
		this.state = {
            autoPlay: false,
            playButtonText: "Start",
			images: [
                {
                    original: 'http://lorempixel.com/1000/600/nature/1/',
                    thumbnail: 'http://lorempixel.com/250/150/nature/1/',
                    originalClass: 'featured-slide',
                    thumbnailClass: 'featured-thumb',
                    description: 'Description'
                },
                {
                    original: 'http://lorempixel.com/1000/600/nature/2/',
                    thumbnail: 'http://lorempixel.com/250/150/nature/2/'
                },
                {
                    original: 'http://lorempixel.com/1000/600/nature/3/',
                    thumbnail: 'http://lorempixel.com/250/150/nature/3/'
                },
                {
                    original: 'http://lorempixel.com/1000/600/nature/4/',
                    thumbnail: 'http://lorempixel.com/250/150/nature/4/'
                },
                {
                    original: 'http://lorempixel.com/1000/600/nature/5/',
                    thumbnail: 'http://lorempixel.com/250/150/nature/5/'
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
                                    ref={(i) => this._imageGallery = i}
                                    items={this.state.images} 
                                    autoPlay={this.state.autoPlay}
                                    slideInterval={2000} 
                                />
                            </Cell>
                            <Cell size='1/3'>
                                <RaisedButton label={this.state.playButtonText} primary={true} onTouchTap={this._autoPlayChange}/>
                            </Cell>
                        </Grid>
					</WidgetText>
				</Widget>
			</Dashboard>
	}
    
    _autoPlayChange = (e) => {
        var autoPlay = !this.state.autoPlay;
        var playButtonText = autoPlay ? "Pause" : "Start";
        
        if (!this.state.autoPlay) {
            this._imageGallery.play();
        }
        else {
            this._imageGallery.pause();
        }
        this.setState({autoPlay: autoPlay});
        this.setState({playButtonText: playButtonText});
    };
}

export default ImageGalleryPage