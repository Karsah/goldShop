// import React, { useState } from 'react';
import ImageUploading from 'react-images-uploading';
import style from './DonluadeImage.module.css'
import xxx from '../Images/xxx.png'
import vec from '../Images/Vector.png'

const DonluadeImage = ({images,onChange}) => {
  const maxNumber = 69;


  return (
    <div className="App">
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          <div className="upload__image_wrapper"  >
          {imageList.length  === 0 && 
           <button className={style.btn}
              style={isDragging ? { color: 'red' } : undefined}
              onClick={onImageUpload}
              {...dragProps}
            ><div>
                <img src={vec} alt=''/>
                <p className={style.textP}>Загрузить Фото</p>
              </div>
            </button>}
            &nbsp;
            {imageList.map((image, index) => (
              <div key={index} className={`image-item, ${style.asd}`} >
                <img src={image['data_url']} className={style.addImage} alt="" width="100%" />
                <div className={style.imageitem__btnwrapper}>
                  <div onClick={() => onImageRemove(index)}>
                    <img className={style.XX} src={xxx} alt=''/>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
    </div>
  );
}

export default DonluadeImage