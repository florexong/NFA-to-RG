// @ts-check

/**
 * The component that represents the footer of the page.
 * @public
 */
class SectionFooter {

  /* template */
  template = `
    <div class="container-xl py-3 py-xl-5">
      <div class="row">
        <div class="col text-center">
          <hr>
          <div class="text-black-50">
            <div>{{ content }}</div>
            <div>{{ group }}</div>
            <div>{{ year }}</div>
          </div>
        </div>
      </div>
    </div>
  `;

  data = () => {
    return {
      content: 'Assignment for Theory of Computation',
      year: '2020',
      group: 'Group 2'
    };
  };

}