export default function decorate(block) {

    console.log("Any children?");
    [...block.children].forEach((row) => {
        [...row.children].forEach((col) => {
            console.log(col);
        });
    });

    // topNavWrapper
    const topNavWrapper = document.createElement('div');
    topNavWrapper.classList.add('contact');

    
    
    // Build Tele Element
    const telephone = document.createElement('a');
    telephone.href = "tel:844-673-7435";
    telephone.textContent = "844-673-7435";
    telephone.classList.add('link-atom-header-telephone');
    topNavWrapper.append(telephone);

    // Build Address Element
    const address = document.createElement('div');
    address.classList.add('address');
    address.textContent = "1225 Hayes Industrial Drive Marietta, GA"
    topNavWrapper.append(address);

    block.append(topNavWrapper);

    // setup image columns
    [...block.children].forEach((row) => {
      [...row.children].forEach((col) => {
        console.log(col);
        const h1 = col.querySelector('h1');
        console.log(h1);
        if (h1) {
          const h1wrapper = h1.closest('div');
          if (h1wrapper && h1wrapper.children.length === 1) {
            h1.classList.add('columns-img-col');
          }
        }
      });
    });
  }