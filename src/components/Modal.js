import React from 'react'
import { Button, Header, Icon, Modal, Image } from 'semantic-ui-react'
import styled from 'styled-components'

const ProfileImage = styled.img`
  border-radius: 50%;
  @media (max-width: 767px) {
    width: 5rem;
    height: 5rem;
    margin: 2rem;
  }
  @media (max-width: 991px) {
    width: 10rem;
    height: 10rem;
    margin: 1rem;
	}
`

const ProfileModal = profile => {
    return (
      <Modal trigger={<ProfileImage src={profile.img} />}>
        <Modal.Header>{profile.name}</Modal.Header>
        <Modal.Content image>
          <Image src={profile.img} />
          <Modal.Description>
            <Header>{profile.headline}</Header>
            <p>{profile.bio}</p>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    )
}

export default ProfileModal


