import React, { useState } from 'react';

const ModalVideo = () => {
      // Estado para controlar si el modal está abierto
      const [isModalOpen, setIsModalOpen] = useState(false);

      // Función para abrir el modal
      const openModal = () => {
         setIsModalOpen(true);
      };

      // Función para cerrar el modal
      const closeModal = () => {
         setIsModalOpen(false);
      };

   return (
      <div>
         {/* Botón para abrir el modal */}
         <button onClick={openModal}>
         Ver video
         </button>

         {/* Modal para mostrar el video */}
         {isModalOpen && (
         <div className="modal">
            <div className="modal-content">
               {/* Botón para cerrar el modal */}
               <button onClick={closeModal} className="close-modal">
               Cerrar
               </button>

               {/* Video dentro del modal */}
               <video width="100%" controls>
               <source src="https://coparelampago.com/uploads/videos/gol.mp4" type="video/mp4" />
               Tu navegador no soporta la reproducción de videos.
               </video>
            </div>
         </div>
         )}

         {/* Estilos simples para el modal */}
         <style jsx>{`
         .modal {
            display: flex;
            justify-content: center;
            align-items: center;
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: rgba(0, 0, 0, 0.5);
         }
         .modal-content {
            background: white;
            padding: 20px;
            border-radius: 8px;
            position: relative;
            max-width: 600px;
            width: 100%;
         }
         .close-modal {
            position: absolute;
            top: 10px;
            right: 10px;
            background: red;
            color: white;
            border: none;
            padding: 5px 10px;
            cursor: pointer;
         }
         `}</style>
      </div>
   );
};

export default ModalVideo;
