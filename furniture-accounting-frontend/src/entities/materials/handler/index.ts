import axios from 'axios';
import { MaterialAPI } from '../api';
import type { Material } from '../types';

const getAllMaterials = async (): Promise<Material[]> => {
  try {
    const serverResponse = await axios.get(MaterialAPI.getAll());
    const materials: Material[] = serverResponse.data.materials;
    return materials;
  } catch (e) {
    console.log('Ошибка загрузки материалов');
    if (e instanceof Error) {
      throw e;
    }

    throw new Error('Ошибка загрузки материалов');
  }
};

export const materialsHandler = {
  getAllMaterials,
};
