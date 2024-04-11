export default class Widget {
    createCollapse() {
      const container = document.getElementById('widget');
      const content = document.createElement('div');
      content.classList.add('collapse-container');
  
      content.innerHTML = `
      <button class="btn-collapse collapsed">Collapse</button>
      <div class="text-container">
        <div class="text-collapse">
          Anim pariatur cliche reprehenderit, enim eiusmod high life
          accusamus terry richardson ad squid. Nihil anim keffiyeh
          helvetica, craft beer labore wes anderson cred nesciunt sapiente
          ea proident.
        </div>
      </div>
      <div class="copy">Copy</div>
    `;
  
      container.insertAdjacentElement('beforeend', content);
  
      const btn = document.querySelector('.btn-collapse');
      const textContent = document.querySelector('.text-container');
  
      btn.addEventListener('click', (event) => {
        event.preventDefault();
  
        btn.classList.toggle('collapsed');
  
        if (btn.classList.contains('collapsed')) {
          textContent.classList.remove('show');
        } else {
          textContent.classList.add('show');
        }
      });
    }
  }