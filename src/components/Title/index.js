import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

import { Flex } from 'rebass'
import Link from '../Link'
import { RowFixed } from '../Row'
import Logo from '../../assets/logo_white.svg'
import Wordmark from '../../assets/wordmark_white.svg'
import { CHAIN_ID } from '../../constants'

const TitleWrapper = styled.div`
  text-decoration: none;

  &:hover {
    cursor: pointer;
  }

  z-index: 10;
`

const UniIcon = styled(Link)`
  transition: transform 0.3s ease;
  :hover {
    transform: rotate(-5deg);
  }
`

const NetworkTag = styled.div`
  color: white;
  box-sizing: border-box;
  minWidth: 0px;
  background-color: rgba(243, 132, 30, 0.05);
  color: rgb(243, 132, 30);
  font-weight: 500;
  font-size: small;
  width: fit-content;
  margin-top: 5px;
  border-radius: 6px;
  padding: 4px 8px;
`

function displayNetwork() {
  if (CHAIN_ID === '1012') {
    return 'NewChainMainNet';
  }
  else if (CHAIN_ID === '1007') {
    return 'NewChainTestNet';
  }
  else {
    return 'UnknownNetwork';
  }
}

export default function Title() {
  const history = useHistory()

  return (
    <TitleWrapper onClick={() => history.push('/')}>
      <Flex alignItems="center">
        <RowFixed>
          <UniIcon id="link" onClick={() => history.push('/')}>
            <img width={'24px'} src={Logo} alt="logo" />
          </UniIcon>
          <img width={'84px'} style={{ marginLeft: '8px', marginTop: '0px' }} src={Wordmark} alt="logo" />
        </RowFixed>
      </Flex>
      <NetworkTag>
        {displayNetwork()}
      </NetworkTag>
    </TitleWrapper>
  )
}
