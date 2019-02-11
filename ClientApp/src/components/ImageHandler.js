import React from 'react';

export class ImageHandler extends React.Component {
    state = {
        isPreview: false,
        imgPreview: ''
    }
    cancelImg = (e) => {
        e.preventDefault();
        this.setState({ imgPreview: '', isPreview: false });
        e.target.previousSibling.value = null;
    }

    previewPic = (e) => {
        if (e.target.files && e.target.files[0]) {
            let reader = new FileReader();
            reader.onload = (res) => {
                this.setState({ imgPreview: res.target.result, isPreview: true });
                this.props.updateUrl(res.target.result)
            };
            reader.readAsDataURL(e.target.files[0]);
        }
    }
    render() {
        return (
            <div className='ImageUploader card'>
                <img className='card-img-top' src={this.state.imgPreview || this.props.imageSrc || 'https://via.placeholder.com/600x400?text=No+Image+Uploaded'} alt="Upload" />
                <input id="imageUrl" type="file" className="form-control-file" onChange={this.previewPic} />
                {
                    this.state.isPreview ? (
                        <button className='btn btn-warning' onClick={this.cancelImg}>Cancel</button>
                    ) : (
                            null
                        )
                }
            </div>
        );
    }
};
