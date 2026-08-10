// Validação de formulário
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            let isValid = true;
            const nameInput = document.getElementById('name');
            const whatsappInput = document.getElementById('whatsapp');
            const messageInput = document.getElementById('message');
            
            // Validar nome (mínimo 3 caracteres)
            if (nameInput.value.trim().length < 3) {
                isValid = false;
                showError(nameInput, 'Por favor, informe seu nome completo');
            } else {
                removeError(nameInput);
            }
            
            // Validar WhatsApp (formato brasileiro)
            const whatsappRegex = /^\(?([0-9]{2})\)?[-. ]?([0-9]{4,5})[-. ]?([0-9]{4})$/;
            if (!whatsappRegex.test(whatsappInput.value.trim())) {
                isValid = false;
                showError(whatsappInput, 'Por favor, informe um número de WhatsApp válido');
            } else {
                removeError(whatsappInput);
            }
            
            // Validar mensagem (mínimo 10 caracteres)
            if (messageInput.value.trim().length < 10) {
                isValid = false;
                showError(messageInput, 'Por favor, escreva uma mensagem com pelo menos 10 caracteres');
            } else {
                removeError(messageInput);
            }
            
            // Se não for válido, impedir envio
            if (!isValid) {
                event.preventDefault();
            } else {
                // Mostrar feedback visual de envio
                const submitButton = contactForm.querySelector('button[type="submit"]');
                submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
                submitButton.disabled = true;
            }
        });
    }
    
    // Funções auxiliares para mostrar/remover erros
    function showError(input, message) {
        // Remover erro existente primeiro
        removeError(input);
        
        // Criar e adicionar mensagem de erro
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.innerText = message;
        errorDiv.style.color = 'var(--erro)';
        errorDiv.style.fontSize = 'var(--fonte-sm)';
        errorDiv.style.marginTop = '5px';
        
        // Adicionar borda vermelha ao input
        input.style.borderColor = 'var(--erro)';
        
        // Inserir mensagem após o input
        input.parentNode.appendChild(errorDiv);
    }
    
    function removeError(input) {
        // Remover borda vermelha
        input.style.borderColor = '';
        
        // Remover mensagem de erro se existir
        const errorMessage = input.parentNode.querySelector('.error-message');
        if (errorMessage) {
            errorMessage.remove();
        }
    }
    
    // Adicionar verificação em tempo real nos campos
    const formInputs = document.querySelectorAll('#contact-form input, #contact-form textarea');
    formInputs.forEach(input => {
        input.addEventListener('input', function() {
            removeError(this);
        });
    });
});

// Melhorias de responsividade
document.addEventListener('DOMContentLoaded', function() {
    // Verificar tamanho da tela e ajustar elementos se necessário
    function checkScreenSize() {
        const width = window.innerWidth;
        
        // Ajustes para telas pequenas
        if (width <= 480) {
            // Reduzir tamanho do banner em telas muito pequenas
            const banner = document.querySelector('.banner');
            if (banner) {
                banner.style.minHeight = '500px';
            }
            
            // Ajustar grid de serviços para uma coluna
            const servicesGrid = document.querySelector('.services-grid');
            if (servicesGrid) {
                servicesGrid.style.gridTemplateColumns = '1fr';
            }
        }
    }
    
    // Executar na carga inicial
    checkScreenSize();
    
    // Executar quando a janela for redimensionada
    window.addEventListener('resize', checkScreenSize);
    
    // Scroll suave para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 20,
                    behavior: 'smooth'
                });
            }
        });
    });
});
