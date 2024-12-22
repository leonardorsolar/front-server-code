// import { saveUserToDatabase, findUserById, updateUserInDatabase, deleteUserFromDatabase } from '../../../compartilhamento/bancodados/database';
// import { Usuario } from '../modelos/Usuario';

// export class CriarUsuario {
//   // Método para criar um novo usuário
//   async execute(dado: any): Promise<any> {
//     const usuario = new Usuario(dado.name, dado.email, dado.password);

//     try {
//       const userId = await saveUserToDatabase(dado.name, dado.email, dado.password);
//       console.log(`Usuário criado com ID: ${userId}`);
//       return { ...usuario, id: userId };
//     } catch (error) {
//       console.error('Erro ao salvar usuário no banco de dados', error);
//       throw new Error('Erro ao criar usuário');
//     }
//   }
// }

// export class ObterUsuario {
//   // Método para obter um usuário pelo ID
//   async execute(id: string): Promise<Usuario | null> {
//     try {
//       const usuario = await findUserById(id);
//       if (!usuario) {
//         console.log(`Usuário com ID ${id} não encontrado`);
//         return null;
//       }
//       return usuario;
//     } catch (error) {
//       console.error('Erro ao obter usuário do banco de dados', error);
//       throw new Error('Erro ao obter usuário');
//     }
//   }
// }

// export class AtualizarUsuario {
//   // Método para atualizar um usuário pelo ID
//   async execute(id: string, dadosAtualizados: any): Promise<Usuario | null> {
//     try {
//       const usuarioAtualizado = await updateUserInDatabase(id, dadosAtualizados);
//       if (!usuarioAtualizado) {
//         console.log(`Usuário com ID ${id} não encontrado para atualização`);
//         return null;
//       }
//       return usuarioAtualizado;
//     } catch (error) {
//       console.error('Erro ao atualizar usuário no banco de dados', error);
//       throw new Error('Erro ao atualizar usuário');
//     }
//   }
// }

// export class RemoverUsuario {
//   // Método para remover um usuário pelo ID
//   async execute(id: string): Promise<boolean> {
//     try {
//       const usuarioRemovido = await deleteUserFromDatabase(id);
//       if (!usuarioRemovido) {
//         console.log(`Usuário com ID ${id} não encontrado para remoção`);
//         return false;
//       }
//       return true;
//     } catch (error) {
//       console.error('Erro ao remover usuário do banco de dados', error);
//       throw new Error('Erro ao remover usuário');
//     }
//   }
// }
