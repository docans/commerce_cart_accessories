(function($) {

  /**
   * Trigger the Update button when clicking add to cart
   */
  Drupal.behaviors.commerceLineItemForm2 = {
    attach: function (context, settings) {
      // Click the update button, not the remove button on enter key if we are
      // on a text field.
      $('div.commerce-line-item-views-form > form input.accessory-add-to-cart-button', context).click(function(event) {
        var $this = $(this);
        $($this.parents('tr').find('td.views-field-edit-quantity input')).val(1);
        $($this.parents('form').find('input#edit-submit')).click();
      });
      
      var num_cols = $('div.commerce-line-item-views-form thead tr th').length;
      var accessory_header = $('<tr class="toggle-wrapper"><td class="avail-acc" colspan="'+num_cols+'"><a href="#" class="togglelink">Available Accessories</a></td></tr>');
      $('.commerce_cart_non_accessory_row + .commerce_cart_accessory_row').before(accessory_header);
    }
  };

})(jQuery);