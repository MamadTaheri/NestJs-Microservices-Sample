import styled from "styled-components";

const PostModal = (props) => {
    return (
        <Container>
            <Content>
                <Header>
                    <h2>Create a post</h2>
                    <button>
                        <img src="images/close-icon.png" alt="close-icon" />
                    </button>
                </Header>
                <SharedContent>
                    <UserInfo>
                        <img src="images/user.svg" alt="user" />
                        <span>Name</span>
                    </UserInfo>
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
                    <PostButton>Post</PostButton>
                </ShardCreation>
            </Content>
        </Container>
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
    background-color: rgba(0,0,0,0.8);
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
    border-bottom: 1px solid rgba(0,0,0,0.15);
    font-size: 16px;
    line-height: 1.5;
    color: rgba(0,0,0,0.6);
    font-weight: 400;
    display: flex;
    justify-content: space-between;
    align-items: center;
    button {
        height: 40px;
        width: 40px;
        min-width: auto;
        color: rgba(0,0,0,0.15);
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
        border: 2px solid transparent ;
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
    border: 2px solid rgba(0,0,0,0.15);
    img {
        max-width: 40px;
        max-height: 40px;
    }
`;

const SharedComment = styled.div`
    padding-left: 8px;
    margin-right: auto;
    border-left: 1px solid rgba(0,0,0,0.15);
`;

const PostButton = styled.button`
    min-width: 60px;
    border-radius: 20px;
    padding-left: 16px;
    padding-right: 16px;
    background-color: #0a66c2;
    color: white;
    &:hover {
        background-color: #004182;
    }
`;

export default PostModal;