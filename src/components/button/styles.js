import {Typography, Colors, Spacing} from '../../themes';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    alignItems: 'center',
    padding: Spacing.base,
  },
  header: {
    flex: 1,
    ...Typography.mainHeader,
  },
  section: {
    flex: 3,
    ...Typography.section,
  },
});
