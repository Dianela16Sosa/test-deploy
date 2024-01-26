import { v4 as uuid } from 'uuid';

// export const fileNamer = (req: Express.Request, file: Express.Multer.File, callback: Function) => {
//   //A estas alturas el archivo debería existir, por lo que la validación no sería necesaria. Pero por las dudas se deja
//   if (!file) return callback(new Error('File is empty'), false);

//   const fileExtension = file.mimetype.split('/')[1];
//   const fileName = `${ uuid() }.${ fileExtension }`;

//   callback(null, fileName);
// }

export const imageFileNamer = (folderPath: string, file: Express.Multer.File) => {
  let fileExtension: string = file.mimetype.split('/')[1];
  
  file.originalname = `vehicle-image-${ uuid() }.${ fileExtension }`;

  return folderPath + "/" + file.originalname;
}
export const imageUserFileNamer = (folderPath: string, file: Express.Multer.File) => {
  let fileExtension: string = file.mimetype.split('/')[1];
  console.log(fileExtension);
  file.originalname = `foto-perfil-${ uuid() }.${ fileExtension }`;

  return folderPath + "/" + file.originalname;
}

