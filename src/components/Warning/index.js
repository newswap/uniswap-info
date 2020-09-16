import React from 'react'
import 'feather-icons'
import styled from 'styled-components'
import { Text } from 'rebass'
import { AlertTriangle } from 'react-feather'
import { RowBetween, RowFixed } from '../Row'
import { ButtonDark } from '../ButtonStyled'
import { AutoColumn } from '../Column'
import { Hover } from '..'
import Link from '../Link'
import { useMedia } from 'react-use'
import { EXPLORER_URL } from '../../constants'
import { useTranslation } from 'react-i18next'

const WarningWrapper = styled.div`
  border-radius: 20px;
  border: 1px solid #f82d3a;
  background: rgba(248, 45, 58, 0.05);
  padding: 1rem;
  color: #f82d3a;
  display: ${({ show }) => !show && 'none'};
  margin: 0 2rem 2rem 2rem;
  position: relative;

  @media screen and (max-width: 800px) {
    width: 80% !important;
    margin-left: 5%;
  }
`

const StyledWarningIcon = styled(AlertTriangle)`
  min-height: 20px;
  min-width: 20px;
  stroke: red;
`

export default function Warning({ type, show, setShow, address }) {
  const below800 = useMedia('(max-width: 800px)')
  const { t } = useTranslation()

  const textContent = below800 ? (
    <div>
      <Text fontWeight={500} lineHeight={'145.23%'} mt={'10px'}>
        { t('nrc6Warning1') }
      </Text>
      <Text fontWeight={500} lineHeight={'145.23%'} mt={'10px'}>
        { t('nrc6Warning2') }
      </Text>
    </div>
  ) : (
      <Text fontWeight={500} lineHeight={'145.23%'} mt={'10px'}>
        { t('nrc6Warning3') }
      </Text>
    )

  return (
    <WarningWrapper show={show}>
      <AutoColumn gap="4px">
        <RowFixed>
          <StyledWarningIcon />
          <Text fontWeight={600} lineHeight={'145.23%'} ml={'10px'}>
            { t('tokenSafetyAlert') }
          </Text>
        </RowFixed>
        {textContent}
        {below800 ? (
          <div>
            <Hover style={{ marginTop: '10px' }}>
              <Link
                fontWeight={500}
                lineHeight={'145.23%'}
                color={'#20C5A0'}
                href={EXPLORER_URL + '/address/' + address}
                target="_blank"
              >
                { t('viewContractOnNewtonExplorer', {tokenOrPair: type === 'token' ? 'token' : 'pair'}) }
                {/* View {type === 'token' ? 'token' : 'pair'} contract on Newton Explorer */}
              </Link>
            </Hover>
            <RowBetween style={{ marginTop: '20px' }}>
              <div />
              <ButtonDark color={'#f82d3a'} style={{ minWidth: '140px' }} onClick={() => setShow(false)}>
                { t('iUnderstand') }
              </ButtonDark>
            </RowBetween>
          </div>
        ) : (
            <RowBetween style={{ marginTop: '10px' }}>
              <Hover>
                <Link
                  fontWeight={500}
                  lineHeight={'145.23%'}
                  color={'#20C5A0'}
                  href={EXPLORER_URL + '/address/' + address}
                  target="_blank"
                >
                  { t('viewContractOnNewtonExplorer', {tokenOrPair: type === 'token' ? 'token' : 'pair'}) }
              </Link>
              </Hover>
              <ButtonDark color={'#f82d3a'} style={{ minWidth: '140px' }} onClick={() => setShow(false)}>
                { t('iUnderstand') }
              </ButtonDark>
            </RowBetween>
          )}
      </AutoColumn>
    </WarningWrapper>
  )
}
