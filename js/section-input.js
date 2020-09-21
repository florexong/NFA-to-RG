// @ts-check

/// <reference path="../../adapter.js" />
/// <reference path="../primitives/subtitle.js" />
/// <reference path="../primitives/nav-tab-frame.js" />
/// <reference path="../complexes/input-area-table.js" />

/**
 * The components for input section of the page.
 * @public
 */
class SectionInput {

  /* template */
  template = `
    <div class="container-xl pt-3 pt-xl-5">
      <sub-title :title="title"></sub-title>
      <div class="row pt-2">
        <div class="col">
          <nav-tab-frame :items="items">
            <template #tab-table-input>
              <input-area-table :adapter="adapter"></input-area-table>
              <hr>
              <button @click="adapter.convert()" type="button" class="btn btn-sm btn-outline-primary float-right">
                <span>Convert</span>
              </button>
            </template>
          </nav-tab-frame>
        </div>
      </div>
    </div>
  `;

  components = {
    'sub-title': new Subtitle(),
    'nav-tab-frame': new NavTabFrame(),
    'input-area-table': new InputAreaTable()
  };

  props = {
    'adapter': Adapter
  };

  data = () => {
    return {
      title: 'NFA-ε input',
      items: [
        {
          id: 'tab-table-input',
          name: 'Table'
        }
      ]
    };
  };

}