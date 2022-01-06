import { useState } from "react";
import styled from "styled-components";

const PostModal = ({ showModal, handleClick }) => {
  const [editorText, setEditorText] = useState("");
  const [shareImage, setShareImage] = useState("");

  const handleChange = e => {
      const image = e.target.files[0];
      if(image === '' || image === undefined) {
          alert(`not an image, the file is ${typeof image}`);
          return;
      }
      setShareImage(image);
  }

  const reset = (e) => {
    setEditorText("");
    handleClick(e);
  };

  return (
    <>
      { showModal === 'open' && 
        <Container>
          <Content>
            <Header>
              <h2>Create a post</h2>
              <button onClick={(e) => reset(e)}>
                <img src="images/close-icon.png" alt="close-icon" />
              </button>
            </Header>
            <SharedContent>
              <UserInfo>
                <img src="images/user.svg" alt="user" />
                <span>Name</span>
              </UserInfo>
              <Editor>
                <textarea
                  value={editorText}
                  onChange={(e) => setEditorText(e.target.value)}
                  placeholder="What do you want to talk about ?"
                  autoFocus={true}
                 />
                 <UploadImage>
                     <input 
                        type="file" 
                        accept="image/gif, image/jpeg, image/png"
                        name="image"
                        id="file"
                        style={{ display: "none" }}
                        onChange={handleChange}
                    />
                    <p>
                        <label htmlFor="file">Select an image to sahre</label>
                    </p>
                    {shareImage && <img src={URL.createObjectURL(shareImage)} />}
                 </UploadImage>
              </Editor>
            </SharedContent>
            <ShardCreation>
              <AttachAssets>
                <AssetButton>
                  <img src="images/photo.png" alt="photo" />
                </AssetButton>
                <AssetButton>
                  <img src="images/video.png" alt="video" />
                </AssetButton>
              </AttachAssets>
              <SharedComment>
                <AssetButton>
                  <img src="images/btncomment.png" alt="btncomment" />
                  Anyone
                </AssetButton>
              </SharedComment>
              <PostButton disabled={!editorText ? true : false}>Post</PostButton>
            </ShardCreation>
          </Content>
        </Container>
      }
    </>
  );
};

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  color: black;
  background-color: rgba(0, 0, 0, 0.8);
  animation: fadeIn 0.3s;
`;

const Content = styled.div`
  width: 100%;
  max-width: 552px;
  background-color: white;
  max-height: 90%;
  overflow: initial;
  border-radius: 5px;
  position: relative;
  display: flex;
  flex-direction: column;
  top: 32px;
  margin: 0 auto;
`;

const Header = styled.div`
  padding: 16px 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  font-size: 16px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.6);
  font-weight: 400;
  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    height: 40px;
    width: 40px;
    min-width: auto;
    color: rgba(0, 0, 0, 0.15);
    img {
      height: 26px;
      width: 26px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0;
      margin: 0;
      pointer-events: none;
    }
  }
`;

const SharedContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-y: auto;
  vertical-align: baseline;
  background: transparent;
  padding: 8px 12px;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 24px;
  img {
    width: 40px;
    height: 40px;
    background-clip: content-box;
    border: 2px solid transparent;
    border-radius: 50%;
  }
  span {
    font-weight: 600;
    font-size: 16px;
    line-height: 1.5;
    margin-left: 5px;
  }
`;

const ShardCreation = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 24px 12px 16px;
`;

const AttachAssets = styled.div`
  display: flex;
  align-items: center;
  padding-right: 8px;
`;

const AssetButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  min-width: auto;
  border: 2px solid rgba(0, 0, 0, 0.15);
  img {
    max-width: 40px;
    max-height: 40px;
  }
`;

const SharedComment = styled.div`
  padding-left: 8px;
  margin-right: auto;
  border-left: 1px solid rgba(0, 0, 0, 0.15);
`;

const PostButton = styled.button`
  min-width: 60px;
  border-radius: 20px;
  padding-left: 16px;
  padding-right: 16px;
  background-color: ${props => props.disabled ? 'rgba(0,0,0,0.8)' : '#0a66c2'};
  color:  ${props => props.disabled ? 'rgba(1,1,1,0.2)' : 'white'};
  &:hover {
    /* background-color: #004182; */
    background-color:${props => props.disabled ? 'rgba(0,0,0,0.08)' : '#004182'};
  }
`;

const Editor = styled.div`
  padding: 12px 24px;
  textarea {
    width: 100%;
    min-height: 100px;
    resize: none;
    padding: 8px;
  }
  input {
    width: 100%;
    height: 35px;
    font-size: 16px;
    margin-bottom: 20px;
  }
`;

const UploadImage = styled.div`
    text-align: center;
    img {
        max-width: 100%;
    }
`;

export default PostModal;
