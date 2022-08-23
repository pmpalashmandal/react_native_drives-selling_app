import React, {useState} from 'react';
import {
  Modal,
  Button,
  Input,
  VStack,
  Text,
  FormControl,
  Center,
  NativeBaseProvider,
  HStack,
  Badge,
} from 'native-base';

const OrderDetailsConfermation = ({packageInfo, phoneNumber, modal}) => {
  const [modalVisible, setModalVisible] = useState(modal);
  return (
    <>
      <Modal
        isOpen={modalVisible}
        onClose={() => setModalVisible(false)}
        avoidKeyboard
        justifyContent="center"
        bottom="4"
        size="lg">
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>Confirm Details</Modal.Header>
          <Modal.Body>
            If everything is correct, press confirm to proceed.
            <HStack
              alignItems="center"
              m={2}
              space={4}
              justifyContent="space-between">
              <HStack alignItems="center">
                <Badge
                  colorScheme="darkBlue"
                  _text={{
                    color: 'white',
                  }}
                  variant="solid"
                  rounded="4">
                  Operator
                </Badge>
              </HStack>
              <VStack>
                <Text
                  color="coolGray.600"
                  _dark={{
                    color: 'warmGray.200',
                  }}
                  fontWeight="700">
                  {packageInfo.operator}
                </Text>
              </VStack>
            </HStack>
            <HStack
              alignItems="center"
              m={2}
              space={4}
              justifyContent="space-between">
              <HStack alignItems="center">
                <Badge
                  colorScheme="darkBlue"
                  _text={{
                    color: 'white',
                  }}
                  variant="solid"
                  rounded="4">
                  Package
                </Badge>
              </HStack>
              <VStack>
                <Text
                  color="coolGray.600"
                  _dark={{
                    color: 'warmGray.200',
                  }}
                  fontWeight="700">
                  {packageInfo.name}
                </Text>
              </VStack>
            </HStack>
            <HStack
              alignItems="center"
              m={2}
              space={4}
              justifyContent="space-between">
              <HStack alignItems="center">
                <Badge
                  colorScheme="darkBlue"
                  _text={{
                    color: 'white',
                  }}
                  variant="solid"
                  rounded="4">
                  Validity
                </Badge>
              </HStack>
              <VStack>
                <Text
                  color="coolGray.600"
                  _dark={{
                    color: 'warmGray.200',
                  }}
                  fontWeight="700">
                  30 Days
                </Text>
              </VStack>
            </HStack>
            <HStack
              alignItems="center"
              m={2}
              space={4}
              justifyContent="space-between">
              <HStack alignItems="center">
                <Badge
                  colorScheme="darkBlue"
                  _text={{
                    color: 'white',
                  }}
                  variant="solid"
                  rounded="4">
                  Area
                </Badge>
              </HStack>
              <VStack>
                <Text
                  color="coolGray.600"
                  _dark={{
                    color: 'warmGray.200',
                  }}
                  fontWeight="700">
                  {packageInfo.area}
                </Text>
              </VStack>
            </HStack>
            <HStack
              alignItems="center"
              m={2}
              space={4}
              justifyContent="space-between">
              <HStack alignItems="center">
                <Badge
                  colorScheme="darkBlue"
                  _text={{
                    color: 'white',
                  }}
                  variant="solid"
                  rounded="4">
                  Price Tk.
                </Badge>
              </HStack>
              <VStack>
                <Text
                  color="coolGray.600"
                  _dark={{
                    color: 'warmGray.200',
                  }}
                  fontWeight="700">
                  {packageInfo.price}
                </Text>
              </VStack>
            </HStack>
            <HStack
              alignItems="center"
              m={2}
              space={4}
              justifyContent="space-between">
              <HStack alignItems="center">
                <Badge
                  colorScheme="darkBlue"
                  _text={{
                    color: 'white',
                  }}
                  variant="solid"
                  rounded="4">
                  Recever
                </Badge>
              </HStack>
              <VStack>
                <Text
                  color="coolGray.600"
                  _dark={{
                    color: 'warmGray.200',
                  }}
                  fontWeight="700">
                  {phoneNumber}
                </Text>
              </VStack>
            </HStack>
          </Modal.Body>
          <Modal.Footer>
            <Button
              flex="1"
              onPress={() => {
                setModalVisible(false);
              }}>
              Confirm
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </>
  );
};

export default OrderDetailsConfermation;
