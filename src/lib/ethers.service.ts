// import { TypedDataDomain, TypedDataField } from '@ethersproject/abstract-signer';
import { ethers, utils } from 'ethers';
// import { omit } from './helpers';

export function getProvider() {
  return new ethers.providers.JsonRpcProvider("https://rpc-mumbai.matic.today");
}

export async function getSigner() {
	const provider = await getProvider();
	return provider.getSigner();
}

export async function getAddressFromSigner() {
	const signer = await getSigner();
	const address = await signer.getAddress();
	return address;
}

// export const signedTypeData = (
//   domain: TypedDataDomain,
//   types: Record<string, TypedDataField[]>,
//   value: Record<string, any>
// ) => {
//   const signer = getSigner();
//   // remove the __typedname from the signature!
//   return signer._signTypedData(
//     omit(domain, '__typename'),
//     omit(types, '__typename'),
//     omit(value, '__typename')
//   );
// };

// export const splitSignature = (signature: string) => {
//   return utils.splitSignature(signature);
// };

// export const sendTx = (
//   transaction: ethers.utils.Deferrable<ethers.providers.TransactionRequest>
// ) => {
//   const signer = getSigner();
//   return signer.sendTransaction(transaction);
// };

export async function signText(text: string) {
	const signer = await getSigner();
	return signer.signMessage(text);
}
