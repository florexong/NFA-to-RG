// @ts-check

/// <reference path="../../adapter.js" />
/// <reference path="../primitives/member-card.js" />
/// <reference path="../primitives/modal-frame.js" />

/**
 * The component that represents the header of the page.
 * @public
 */
class SectionHeader {

  /* template */
  template = `
    <div class="container-xl">
      <div class="row">
        <div class="col text-center">
          <h1>NFA-ε to DFA Converter</h1>
          <hr>
          <button type="button" class="btn btn-link text-secondary" data-toggle="modal" :data-target="'#' + id">
            View group members
          </button>
        </div>
      </div>
      <modal-frame :id="id" :title="title">
        <div class="row justify-center pl-3">
          <div v-for="member in members" class="col-12 col-xl-4 p-0 pr-3 pt-xl-0 pt-3">
            <member-card 
            :name="member.name" 
            :role="member.role" 
            :id="member.id" 
            :url="member.url"></member-card>
          </div>
        </div>
      </modal-frame>
    </div>
  `;

  components = {
    'modal-frame': new ModalFrame(),
    'member-card': new MemberCard()
  }

  props = {
    'adapter': Adapter
  }

  data = () => {
    return {
      title: 'Group Members',
      id: 'group-member-modal',
      members: [
        {
          name: 'Oo Jin Heng',
          id: '1161303917',
          role: 'Leader',
          url: 'resources/img/1161303917.jpg'
        },
        {
          name: 'Ong Jia Jun',
          id: '1161201687',
          role: 'Member',
          url: 'resources/img/1161201687.jpg'
        },
        {
          name: 'Kang Shu Ern',
          id: '1151205225',
          role: 'Member',
          url: 'resources/img/1151205225.jpg'
        }
      ]
    };
  };

}