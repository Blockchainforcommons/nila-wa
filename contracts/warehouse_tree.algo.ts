import { Contract } from '@algorandfoundation/tealscript';

// eslint-disable-next-line no-unused-vars
class WarehouseTree extends Contract {
  /**
   * Set the Globalstate values of tree_root and tree_size 
   */
  tree_root = GlobalStateKey<string>()
  tree_size = GlobalStateKey<number>()
  empty_leaf: string = "c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470"

  /**
   * Method to rebuild the tree 
   * @param leafs 
   * @param depth 
   * #@returns the root hash calculated from the leafs
   */

  private merkle_tree(): string {

  }
  private merkle_tree_root(leafs: bytes[]): string {
    // iterate untill the leaf var has length of one
    while (len(leafs) !== 1){

    }
    return ''
  }

  /**
   * Create the application and set the tree_size and calculate the initial root
   */
  createApplication(tree_size: number, empty_leafs: string[]): void {
    this.tree_size.value = tree_size
    this.tree_root.value = this.merkle_tree_root(empty_leafs)
  }


  /**
   * 
   */
  /**
   * Calculates the sum of two numbers
   *
   * @param a
   * @param b
   * @returns The sum of a and b
   */
  /**
   * Calculates the difference between two numbers
   *
   * @param a
   * @param b
   * @returns The difference between a and b.
   */
  private getDifference(a: number, b: number): number {
    return a >= b ? a - b : b - a;
  }

  /**
   * A method that takes two numbers and does either addition or subtraction
   *
   * @param a The first number
   * @param b The second number
   * @param operation The operation to perform. Can be either 'sum' or 'difference'
   *
   * @returns The result of the operation
   */
  doMath(a: number, b: number, operation: string): number {
    let result: number;

    if (operation === 'sum') {
      result = this.getSum(a, b);
    } else if (operation === 'difference') {
      result = this.getDifference(a, b);
    } else throw Error('Invalid operation');

    return result;
  }
}
