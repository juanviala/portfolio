        document.addEventListener('DOMContentLoaded', () => {
            const modal = document.getElementById('myModal');
            const modalContentContainer = document.getElementById('modal-content-container');
            const closeModal = document.querySelector('.modal-close');

            // Añadir evento de clic a cada ítem de la grilla
            document.querySelectorAll('.grid-item').forEach(item => {
                item.addEventListener('click', () => {
                    const type = item.getAttribute('data-type');
                    const src = item.getAttribute('data-src');

                    // Limpiar contenido anterior del modal
                    modalContentContainer.innerHTML = '';

                    // Crear y añadir el nuevo contenido (video o imagen)
                    if (type === 'video') {
                        const video = document.createElement('video');
                        video.setAttribute('controls', true);
                        video.setAttribute('autoplay', true);
                        const source = document.createElement('source');
                        source.setAttribute('src', src);
                        source.setAttribute('type', 'video/mp4');
                        video.appendChild(source);
                        modalContentContainer.appendChild(video);
                    } else if (type === 'image') {
                        const img = document.createElement('img');
                        img.setAttribute('src', src);
                        modalContentContainer.appendChild(img);
                    }

                    // Mostrar el modal
                    modal.classList.add('active');
                });
            });

            // Función para cerrar el modal
            const closeTheModal = () => {
                modal.classList.remove('active');
                const video = modalContentContainer.querySelector('video');
                // Detener y limpiar el video al cerrar
                if (video) {
                    video.pause();
                    video.currentTime = 0;
                    modalContentContainer.innerHTML = '';
                }
            };

            // Evento para cerrar el modal con el botón 'X'
            closeModal.addEventListener('click', closeTheModal);

            // Evento para cerrar el modal haciendo clic fuera del contenido
            modal.addEventListener('click', (event) => {
                if (event.target === modal) {
                    closeTheModal();
                }
            });

            // Evento para cerrar el modal con la tecla 'Escape'
            document.addEventListener('keydown', (event) => {
                if (event.key === 'Escape' && modal.classList.contains('active')) {
                    closeTheModal();
                }
            });
        });